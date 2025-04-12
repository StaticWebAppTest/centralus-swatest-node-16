module.exports = async function (context, req) {
  const date = "2025-04-12T12:21:41.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

