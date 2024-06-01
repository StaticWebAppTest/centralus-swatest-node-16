module.exports = async function (context, req) {
  const date = "2024-06-01T22:08:21.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

