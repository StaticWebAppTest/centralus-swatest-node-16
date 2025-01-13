module.exports = async function (context, req) {
  const date = "2025-01-13T21:10:34.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

