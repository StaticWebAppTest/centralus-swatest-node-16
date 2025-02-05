module.exports = async function (context, req) {
  const date = "2025-02-05T06:16:35.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

