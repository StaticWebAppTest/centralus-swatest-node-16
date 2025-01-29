module.exports = async function (context, req) {
  const date = "2025-01-29T05:11:35.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

