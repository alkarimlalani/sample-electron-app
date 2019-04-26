console.log("Hello from the child process!");

// Send a message to the parent process
if (process.send) {
  process.send("Donde esta la biblioteca?");
}
