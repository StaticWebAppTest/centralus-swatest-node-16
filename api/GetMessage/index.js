module.exports = async function (context, req) {
  const date = "2022-12-07T00:53:09.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

