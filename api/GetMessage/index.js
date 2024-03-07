module.exports = async function (context, req) {
  const date = "2024-03-07T00:33:45.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

