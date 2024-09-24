module.exports = async function (context, req) {
  const date = "2024-09-24T07:11:27.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

