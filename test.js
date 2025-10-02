console.log("Running tests...");

if (1 + 1 !== 2) {
  console.error("Test failed!");
  process.exit(1); // EXIT WITH ERROR → workflow fails
} else {
  console.log("All tests passed ✅");
}
