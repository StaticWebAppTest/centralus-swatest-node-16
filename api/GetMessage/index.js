module.exports = async function (context, req) {
  const date = "2025-01-02T10:12:04.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

