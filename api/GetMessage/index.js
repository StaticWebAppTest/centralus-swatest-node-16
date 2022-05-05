module.exports = async function (context, req) {
  const date = "2022-05-05T23:11:29.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

