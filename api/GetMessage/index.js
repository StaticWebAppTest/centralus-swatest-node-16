module.exports = async function (context, req) {
  const date = "2024-06-26T22:09:41.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

