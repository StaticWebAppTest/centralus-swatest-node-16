module.exports = async function (context, req) {
  const date = "2025-01-22T00:57:10.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

