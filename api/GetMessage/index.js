module.exports = async function (context, req) {
  const date = "2022-06-09T18:17:18.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

