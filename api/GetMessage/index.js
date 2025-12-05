module.exports = async function (context, req) {
  const date = "2025-12-05T17:13:47.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

