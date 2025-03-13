module.exports = async function (context, req) {
  const date = "2025-03-13T14:12:12.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

