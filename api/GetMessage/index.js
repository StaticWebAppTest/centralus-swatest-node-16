module.exports = async function (context, req) {
  const date = "2022-08-13T19:08:19.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

