const {
  queryMessageWithSiminnFetch,
  queryMessageWithSiminnAxios,
  queryMessageWithSiminnGOT,
  queryMessageWithSiminnHTTP,
} = require("./siminn");

async function showcase() {
  // HTTP requests
  await queryMessageWithSiminnFetch("17b17c8fe8c00007b2c2885d9d4562a4");
  await queryMessageWithSiminnAxios("17b17c8fe8c00007b2c2885d9d4562a4");
  await queryMessageWithSiminnGOT("17b17c8fe8c00007b2c2885d9d4562a4");
  await queryMessageWithSiminnHTTP("17b17c8fe8c00007b2c2885d9d4562a4");

  // HTTPS requests
  await queryMessageWithSiminnFetch("17b17c8fe8c00007b2c2885d9d4562a4", true);
  await queryMessageWithSiminnAxios("17b17c8fe8c00007b2c2885d9d4562a4", true);
  await queryMessageWithSiminnGOT("17b17c8fe8c00007b2c2885d9d4562a4", true);
  await queryMessageWithSiminnHTTP("17b17c8fe8c00007b2c2885d9d4562a4", true);
}
showcase();
