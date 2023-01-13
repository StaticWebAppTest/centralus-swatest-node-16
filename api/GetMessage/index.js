module.exports = async function (context, req) {
  const date = "2023-01-13T23:09:22.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

