module.exports = async function (context, req) {
  const date = "2025-01-26T20:11:26.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

