module.exports = async function (context, req) {
  const date = "2023-04-19T22:08:13.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

