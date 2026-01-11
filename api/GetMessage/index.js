module.exports = async function (context, req) {
  const date = "2026-01-11T10:14:47.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

