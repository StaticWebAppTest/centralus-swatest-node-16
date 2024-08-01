module.exports = async function (context, req) {
  const date = "2024-08-01T12:19:51.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

