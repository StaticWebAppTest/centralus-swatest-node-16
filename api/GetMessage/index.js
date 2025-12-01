module.exports = async function (context, req) {
  const date = "2025-12-01T15:14:59.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

