module.exports = async function (context, req) {
  const date = "2022-07-14T07:12:03.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

