module.exports = async function (context, req) {
  const date = "2023-12-26T00:41:48.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

