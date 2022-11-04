module.exports = async function (context, req) {
  const date = "2022-11-04T20:12:33.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

