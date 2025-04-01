module.exports = async function (context, req) {
  const date = "2025-04-01T16:14:49.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

