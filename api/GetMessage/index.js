module.exports = async function (context, req) {
  const date = "2024-03-05T05:08:56.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

