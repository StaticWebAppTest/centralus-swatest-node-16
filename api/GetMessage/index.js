module.exports = async function (context, req) {
  const date = "2023-11-19T07:08:08.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

