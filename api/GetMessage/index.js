module.exports = async function (context, req) {
  const date = "2025-06-20T03:12:29.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

