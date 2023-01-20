module.exports = async function (context, req) {
  const date = "2023-01-20T22:09:16.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

