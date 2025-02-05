module.exports = async function (context, req) {
  const date = "2025-02-05T00:56:41.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

