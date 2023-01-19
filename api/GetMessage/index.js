module.exports = async function (context, req) {
  const date = "2023-01-19T20:10:17.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

