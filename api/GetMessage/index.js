module.exports = async function (context, req) {
  const date = "2024-03-26T20:10:11.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

