module.exports = async function (context, req) {
  const date = "2022-09-03T22:10:35.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

