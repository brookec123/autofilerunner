# Auto File Runner README

This extension allows you to run a specific file (specified for each folder) with a single key press. All you have to do is press `Alt+F5`.

## Features

- **Run Specified Files**: Automatically runs the specified file based on its type.
- **Auto Open in Editor**: Opens the file in the editor before running it.
- **Configurable Commands**: Provides configurable commands for different file types for the supported languages.

## Currently Supported Languages
<div>
  <span style="color:#19e044;padding-left: 25px;">&#x2714;</span> Python <br>
  <span style="color:#19e044;padding-left: 25px;">&#x2714;</span> C <br>
  <span style="color:#19e044;padding-left: 25px;">&#x2714;</span> C++ <br>
  <span style="color:#19e044;padding-left: 25px;">&#x2714;</span> Java
</div>

## Extension Settings

This extension contributes the following settings:

* `autofilerunner.run-file.file-location`: The location of the file that you want to always run.
* `autofilerunner.run-file.default-commands`: Commands to run any file.
* `autofilerunner.run-file.python-commands`: Commands to run a Python file.
* `autofilerunner.run-file.c-commands`: Commands to run a C file.
* `autofilerunner.run-file.cpp-commands`: Commands to run a C++ file.
* `autofilerunner.run-file.java-commands`: Commands to run a Java file.

### Example Commands

#### Python
```sh
python %filePath%
```

#### C
```sh
cd %baseDirectory%
gcc %filePath% -o %fileName%
.\\%fileName%
```

#### C++
```sh
cd %baseDirectory%
g++ %filePath% -o %fileName%
.\\%fileName%
```

#### Java
```sh
javac -source 1.8 -target 1.8 -d target/classes -sourcepath src/main/java %filePath%
java -cp target/classes com.example.%fileName%
```

## Release Notes

### 0.0.1

Initial release of Auto File Runner.

## Contributing
If you encounter any issues or have suggestions for improvements, feel free to [open an issue](https://github.com/brookec123/autofilerunner/issues) on GitHub.

---

**Enjoy!**
