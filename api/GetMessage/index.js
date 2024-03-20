module.exports = async function (context, req) {
  const date = "2024-03-20T08:11:29.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

