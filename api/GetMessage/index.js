module.exports = async function (context, req) {
  const date = "2023-03-26T20:08:58.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

