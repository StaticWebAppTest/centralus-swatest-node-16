module.exports = async function (context, req) {
  const date = "2023-09-14T19:05:41.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

