module.exports = async function (context, req) {
  const date = "2023-10-31T16:11:22.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

