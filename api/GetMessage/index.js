module.exports = async function (context, req) {
  const date = "2022-07-14T20:12:14.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

