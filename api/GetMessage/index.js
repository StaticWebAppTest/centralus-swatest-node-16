module.exports = async function (context, req) {
  const date = "2024-12-31T10:12:29.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

