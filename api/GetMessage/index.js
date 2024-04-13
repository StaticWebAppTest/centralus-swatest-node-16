module.exports = async function (context, req) {
  const date = "2024-04-13T22:08:26.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

