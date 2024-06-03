module.exports = async function (context, req) {
  const date = "2024-06-03T22:09:56.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

