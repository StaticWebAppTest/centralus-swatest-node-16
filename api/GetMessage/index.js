module.exports = async function (context, req) {
  const date = "2023-04-09T20:08:49.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

