module.exports = async function (context, req) {
  const date = "2022-04-04T07:10:46.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

