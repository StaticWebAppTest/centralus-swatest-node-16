module.exports = async function (context, req) {
  const date = "2023-09-26T08:12:05.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

