module.exports = async function (context, req) {
  const date = "2023-03-08T22:09:41.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

