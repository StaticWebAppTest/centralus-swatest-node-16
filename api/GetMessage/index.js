module.exports = async function (context, req) {
  const date = "2022-07-14T16:17:22.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

