module.exports = async function (context, req) {
  const date = "2025-01-05T19:08:12.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

