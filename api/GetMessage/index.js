module.exports = async function (context, req) {
  const date = "2022-05-21T12:18:34.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

