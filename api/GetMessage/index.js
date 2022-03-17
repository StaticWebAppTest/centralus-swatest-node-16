module.exports = async function (context, req) {
  const date = "2022-03-17T23:09:58.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

