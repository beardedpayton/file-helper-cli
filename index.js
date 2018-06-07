#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');

program
  .version('1.0.0')
  .description('Manage files with the power of Node.js');

program
  .command('listen <filename>')
  .alias('l')
  .description('Listen for file changes')
  .action(filename => {
    fs.watch(filename, (eventType) => {
      console.log(`event type: ${eventType}`);
    });
  });

program
  .command('delete <filename>')
  .alias('d')
  .description('Delete a file')
  .action(filename => {
    fs.unlink(filename, () => {
      console.log(`succesfully deleted: ${filename}`);
    });
  });

program
  .command('rename <fileone> <filetwo>')
  .alias('rr')
  .description('Rename a file')
  .action((fileone, filetwo) => {
    fs.renameSync(fileone, filetwo);
  });

program
  .command('read <file>')
  .alias('r')
  .description('Read contents of a file')
  .action(file => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data)
    });
  });

program
  .command('write <filename> <data>')
  .alias('w')
  .description('Create a file with supplied data')
  .action((file, data) => {
    fs.writeFile(file, data, (err) => {
      if (err) throw err;
      console.log(`The file: ${file} has been created`)
    });
  });

program.parse(process.argv);
