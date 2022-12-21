module.exports = async function (context, req) {
  const date = "2022-12-21T20:09:57.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

