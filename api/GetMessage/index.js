module.exports = async function (context, req) {
  const date = "2022-09-17T18:14:10.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

