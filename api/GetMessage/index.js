module.exports = async function (context, req) {
  const date = "2025-01-05T20:11:34.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

