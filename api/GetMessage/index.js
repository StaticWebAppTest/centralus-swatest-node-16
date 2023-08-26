module.exports = async function (context, req) {
  const date = "2023-08-26T19:05:56.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

