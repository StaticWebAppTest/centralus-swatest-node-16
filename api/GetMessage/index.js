module.exports = async function (context, req) {
  const date = "2024-06-22T19:10:05.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

