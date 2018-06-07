# file-helper-cli
> Listen to file changes,
> Delete files,
> Rename files,
> Read files,
> Create new files

A simple file system cli tool built in Node

## Install

```
npm install -g file-helper-cli
```

## Usage

```
Options:

    -V, --version                  output the version number
    -h, --help                     output usage information

  Commands:

    listen|l <filename>            Listen for file changes
    delete|d <filename>            Delete a file
    rename|rr <fileone> <filetwo>  Rename a file
    read|r <file>                  Read contents of a file
    write|w <filename> <data>      Create a file with supplied data
```