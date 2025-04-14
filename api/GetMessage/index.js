module.exports = async function (context, req) {
  const date = "2025-04-14T12:25:41.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

