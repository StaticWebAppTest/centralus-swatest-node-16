module.exports = async function (context, req) {
  const date = "2023-12-15T19:07:29.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

