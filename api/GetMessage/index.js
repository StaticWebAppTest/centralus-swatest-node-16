module.exports = async function (context, req) {
  const date = "2023-05-30T22:08:52.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

