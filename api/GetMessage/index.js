module.exports = async function (context, req) {
  const date = "2024-05-04T19:08:47.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

