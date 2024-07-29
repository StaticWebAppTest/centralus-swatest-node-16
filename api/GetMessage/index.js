module.exports = async function (context, req) {
  const date = "2024-07-29T10:12:35.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

