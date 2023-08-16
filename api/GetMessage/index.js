module.exports = async function (context, req) {
  const date = "2023-08-16T01:39:21.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

