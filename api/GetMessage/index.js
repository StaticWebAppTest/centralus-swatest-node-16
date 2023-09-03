module.exports = async function (context, req) {
  const date = "2023-09-03T02:15:41.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

