// extension.js

const vscode = require('vscode');

function activate(context) {
	const outputChannel = vscode.window.createOutputChannel('My Extension');
	let disposable = vscode.commands.registerCommand('autofilerunner.run-file', function () {
		outputChannel.show();
		const config = vscode.workspace.getConfiguration("brookec.autofilerunner.run-file");
		let fileLocation = config.get("file-location");
		let fileName = fileLocation.split("/").pop();
		var fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) || fileName;
		let baseDir = fileLocation.substring(0, fileLocation.lastIndexOf("\\"));
		outputChannel.appendLine("hi");
		if (fileLocation) {
			// Open the file
			let uri = vscode.Uri.file(fileLocation);
			vscode.workspace.openTextDocument(uri).then(doc => {
				vscode.window.showTextDocument(doc);
				// Execute the file based on its type or just launch it if possible
				vscode.commands.executeCommand('workbench.action.terminal.new').then(() => {
					const terminal = vscode.window.activeTerminal;
					if (terminal) {
						let commands = config.get("brookec.autofilerunner.run-file.default-commands");
						if (Array.isArray(commands)) {
							let commandsArray = commands;

							for (let i = 0; i < commandsArray.length; i++) {
								commandsArray[i] = commandsArray[i].replace("%fileLocation%", fileLocation);
								commandsArray[i] = commandsArray[i].replace("%fileName%", fileName);
								commandsArray[i] = commandsArray[i].replace("%baseDirectory%", baseDir);
								terminal.sendText(commandsArray[i]);
							}
						}

						if (fileExtension === "py") {
							outputChannel.appendLine("python");

							if (Array.isArray(commands)) {
								outputChannel.appendLine("hi " + commands.toString());
								let commandsArray = commands;

								for (let i = 0; i < commandsArray.length; i++) {
									commandsArray[i] = commandsArray[i].replace("%fileLocation%", fileLocation);
									commandsArray[i] = commandsArray[i].replace("%fileName%", fileName);
									commandsArray[i] = commandsArray[i].replace("%baseDirectory%", baseDir);
									outputChannel.appendLine(commandsArray[i]);
									terminal.sendText(commandsArray[i]);
								}
							}
							else {
								outputChannel.appendLine("c: " + commands);
							}
						}
						else if (fileExtension === "c") {
							commands = config.get("brookec.autofilerunner.run-file.c-commands");
							if (Array.isArray(commands)) {
								let commandsArray = commands;

								for (let i = 0; i < commandsArray.length; i++) {
									commandsArray[i] = commandsArray[i].replace("%fileLocation%", fileLocation);
									commandsArray[i] = commandsArray[i].replace("%fileName%", fileName);
									commandsArray[i] = commandsArray[i].replace("%baseDirectory%", baseDir);
									terminal.sendText(commandsArray[i]);
								}
							}
						}
						else if (fileExtension === "cpp") {
							commands = config.get("brookec.autofilerunner.run-file.cpp-commands");
							if (Array.isArray(commands)) {
								let commandsArray = commands;

								for (let i = 0; i < commandsArray.length; i++) {
									commandsArray[i] = commandsArray[i].replace("%fileLocation%", fileLocation);
									commandsArray[i] = commandsArray[i].replace("%fileName%", fileName);
									commandsArray[i] = commandsArray[i].replace("%baseDirectory%", baseDir);
									terminal.sendText(commandsArray[i]);
								}
							}
						}
						else if (fileExtension === "java") {
							commands = config.get("brookec.autofilerunner.run-file.java-commands");
							if (Array.isArray(commands)) {
								let commandsArray = commands;

								for (let i = 0; i < commandsArray.length; i++) {
									commandsArray[i] = commandsArray[i].replace("%fileLocation%", fileLocation);
									commandsArray[i] = commandsArray[i].replace("%fileName%", fileName);
									commandsArray[i] = commandsArray[i].replace("%baseDirectory%", baseDir);
									terminal.sendText(commandsArray[i]);
								}
							}
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

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
