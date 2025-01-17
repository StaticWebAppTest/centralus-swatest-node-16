module.exports = async function (context, req) {
  const date = "2025-01-17T05:11:06.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

