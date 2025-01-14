module.exports = async function (context, req) {
  const date = "2025-01-14T12:21:43.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

