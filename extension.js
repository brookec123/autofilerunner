// extension.js
const vscode = require('vscode');

function activate(context) {
	const outputChannel = vscode.window.createOutputChannel('My Extension');
	let disposable = vscode.commands.registerCommand('autofilerunner.run-file', function () {
		outputChannel.show();
		const config = vscode.workspace.getConfiguration("brookec.autofilerunner.run-file");
		let filePath = config.get("file-path");
		let fileName = filePath.split("\\").pop();
		let fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
		fileName = fileName.substring(0, fileName.lastIndexOf("."));
		let baseDir = filePath.substring(0, filePath.lastIndexOf("\\"));

		outputChannel.appendLine(`File Location: ${filePath}`);
		outputChannel.appendLine(`File Name: ${fileName}`);
		outputChannel.appendLine(`File Extension: ${fileExtension}`);
		outputChannel.appendLine(`Base Directory: ${baseDir}`);

		if (filePath) {
			// Open the file
			let uri = vscode.Uri.file(filePath);
			vscode.workspace.openTextDocument(uri).then(doc => {
				vscode.window.showTextDocument(doc);
				// Execute the file based on its type or just launch it if possible
				vscode.commands.executeCommand('workbench.action.terminal.new').then(() => {
					const terminal = vscode.window.activeTerminal;
					if (terminal) {
						let commands = [];
						if (fileExtension === "py") {
							outputChannel.appendLine("python");
							commands = config.get("python-commands");
						} else if (fileExtension === "c") {
							outputChannel.appendLine("c");
							commands = config.get("c-commands");
						} else if (fileExtension === "cpp") {
							outputChannel.appendLine("cpp");
							commands = config.get("cpp-commands");
						} else if (fileExtension === "java") {
							outputChannel.appendLine("java");
							commands = config.get("java-commands");
						}
						else {
							outputChannel.appendLine("default");
							commands = config.get("default-commands");
						}

						if (Array.isArray(commands)) {
							commands.forEach(command => {
								let cmd = command
									.replace(/%filePath%/g, filePath)
									.replace(/%fileName%/g, fileName)
									.replace(/%baseDirectory%/g, baseDir);
								outputChannel.appendLine(`Executing command: ${cmd}`);
								terminal.sendText(cmd);
							});
						} else {
							outputChannel.appendLine("Commands not defined or not an array.");
						}
					}
				});
			});
		} else {
			vscode.window.showErrorMessage('File path is required!');
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
