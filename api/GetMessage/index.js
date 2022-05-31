module.exports = async function (context, req) {
  const date = "2022-05-31T16:17:41.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

