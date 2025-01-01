module.exports = async function (context, req) {
  const date = "2025-01-01T19:08:43.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

