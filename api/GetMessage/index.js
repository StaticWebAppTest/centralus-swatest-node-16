module.exports = async function (context, req) {
  const date = "2023-02-26T04:11:54.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

