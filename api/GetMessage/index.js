module.exports = async function (context, req) {
  const date = "2022-12-06T22:09:26.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

