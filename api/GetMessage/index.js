module.exports = async function (context, req) {
  const date = "2025-05-26T09:40:14.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

