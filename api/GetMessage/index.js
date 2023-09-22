module.exports = async function (context, req) {
  const date = "2023-09-22T19:06:58.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

