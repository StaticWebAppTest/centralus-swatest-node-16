module.exports = async function (context, req) {
  const date = "2023-09-29T10:09:21.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

