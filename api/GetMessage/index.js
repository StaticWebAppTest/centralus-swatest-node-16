module.exports = async function (context, req) {
  const date = "2024-11-05T22:11:06.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

