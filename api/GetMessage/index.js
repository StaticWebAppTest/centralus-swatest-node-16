module.exports = async function (context, req) {
  const date = "2025-02-28T00:58:56.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

