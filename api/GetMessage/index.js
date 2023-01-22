module.exports = async function (context, req) {
  const date = "2023-01-22T11:07:41.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

