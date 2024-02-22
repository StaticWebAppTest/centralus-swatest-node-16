module.exports = async function (context, req) {
  const date = "2024-02-22T12:15:27.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

