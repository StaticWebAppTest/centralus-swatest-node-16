module.exports = async function (context, req) {
  const date = "2022-10-07T21:11:42.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

