module.exports = async function (context, req) {
  const date = "2025-04-20T05:12:15.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

