module.exports = async function (context, req) {
  const date = "2023-12-06T22:08:41.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

