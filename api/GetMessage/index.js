module.exports = async function (context, req) {
  const date = "2025-02-24T12:23:43.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

