module.exports = async function (context, req) {
  const date = "2023-12-02T21:07:31.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

