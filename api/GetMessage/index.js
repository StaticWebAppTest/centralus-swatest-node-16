module.exports = async function (context, req) {
  const date = "2024-01-22T00:47:24.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

