module.exports = async function (context, req) {
  const date = "2024-12-07T20:12:29.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

