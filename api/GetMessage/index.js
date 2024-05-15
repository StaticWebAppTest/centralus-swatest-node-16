module.exports = async function (context, req) {
  const date = "2024-05-15T02:26:55.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

