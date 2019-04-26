console.log("Hello from the child process!");

// Send a message to the parent process
if (process.send) {
  process.send("Donde esta la biblioteca?");
}

// Log messages from the parent process
process.on('message', message => {
  console.log('message from renderer to the child:', message);
});
