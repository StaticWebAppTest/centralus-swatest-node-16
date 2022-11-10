module.exports = async function (context, req) {
  const date = "2022-11-10T20:13:06.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

