module.exports = async function (context, req) {
  const date = "2024-12-05T18:15:31.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

