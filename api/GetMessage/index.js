module.exports = async function (context, req) {
  const date = "2023-10-22T16:10:14.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

