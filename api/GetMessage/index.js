module.exports = async function (context, req) {
  const date = "2023-03-24T21:07:50.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

