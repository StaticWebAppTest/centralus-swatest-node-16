module.exports = async function (context, req) {
  const date = "2023-09-25T20:09:13.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

