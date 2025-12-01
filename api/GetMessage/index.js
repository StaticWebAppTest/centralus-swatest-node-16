module.exports = async function (context, req) {
  const date = "2025-12-01T07:17:45.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

