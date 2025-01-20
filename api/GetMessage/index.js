module.exports = async function (context, req) {
  const date = "2025-01-20T20:12:05.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

