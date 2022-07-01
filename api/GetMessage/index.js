module.exports = async function (context, req) {
  const date = "2022-07-01T20:11:26.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

