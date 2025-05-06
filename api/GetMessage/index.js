module.exports = async function (context, req) {
  const date = "2025-05-06T03:04:14.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

