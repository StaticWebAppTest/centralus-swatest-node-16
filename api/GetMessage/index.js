module.exports = async function (context, req) {
  const date = "2025-01-02T16:14:15.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

