module.exports = async function (context, req) {
  const date = "2025-05-01T19:10:17.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

