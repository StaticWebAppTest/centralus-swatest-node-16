module.exports = async function (context, req) {
  const date = "2023-01-26T22:08:55.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

