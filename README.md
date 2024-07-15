# Auto File Runner README

This extension allows you to run a specific file (specified for each folder). All you have to do is press `alt+f5`.

## Features

- Run a specific file with a single keypress.
- Supports Python, C, C++, and Java files.

## Extension Settings

This extension contributes the following settings:

* `autofilerunner.run-file.file-location`: The location of the file that you want to always run.
* `autofilerunner.run-file.default-commands`: Commands to run any file.
* `autofilerunner.run-file.python-commands`: Commands to run a Python file.
* `autofilerunner.run-file.c-commands`: Commands to run a C file.
* `autofilerunner.run-file.cpp-commands`: Commands to run a C++ file.
* `autofilerunner.run-file.java-commands`: Commands to run a Java file.

### Custom Variables for Settings

- `%filePath%`: The full file path. Example: `C:\Users\brookec\Desktop\AutoFileRunner\autofilerunner\test\sample.py`
- `%fileName%`: The file name without the extension. Example: `sample`
- `%fileExtension%`: The file extension. Example: `py`
- `%baseDirectory%`: The base directory path. Example: `C:\Users\brookec\Desktop\AutoFileRunner\autofilerunner\test\`

## Known Issues

N/A.

## Release Notes

### 0.0.1

Initial release of Auto File Runner.

---

**Enjoy!**
