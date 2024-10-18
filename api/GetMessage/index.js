module.exports = async function (context, req) {
  const date = "2024-10-18T00:56:49.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

