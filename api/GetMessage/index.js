module.exports = async function (context, req) {
  const date = "2023-12-29T00:35:16.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

