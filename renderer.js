// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { fork } = require('child_process');

// Require the IPC (inter process communication) module to communicate
// with the main process
const { ipcRenderer } = require('electron')

console.log("Hello from the renderer process!");

 const child = fork('child.js', null, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

// When a message is recieved from the child process
// console.log the message
child.on('message', message => {
  console.log('message from child:', message);
  // Forward the message to the main process
  // Note, the channel over which we communicate has been defined
  // as 'renderer-to-main'
  ipcRenderer.send('renderer-to-main', message);
});
