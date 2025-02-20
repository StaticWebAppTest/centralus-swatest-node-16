module.exports = async function (context, req) {
  const date = "2025-02-20T19:09:34.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

