module.exports = async function (context, req) {
  const date = "2024-01-26T22:08:29.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

