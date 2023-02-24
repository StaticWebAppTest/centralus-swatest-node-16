module.exports = async function (context, req) {
  const date = "2023-02-24T22:09:31.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

