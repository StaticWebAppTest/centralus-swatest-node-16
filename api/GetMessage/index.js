module.exports = async function (context, req) {
  const date = "2024-05-25T19:08:17.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

