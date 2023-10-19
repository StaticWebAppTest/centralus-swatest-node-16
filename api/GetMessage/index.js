module.exports = async function (context, req) {
  const date = "2023-10-19T01:43:33.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

