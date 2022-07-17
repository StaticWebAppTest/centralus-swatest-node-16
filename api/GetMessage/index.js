module.exports = async function (context, req) {
  const date = "2022-07-17T11:08:36.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

