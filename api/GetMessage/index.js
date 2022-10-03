module.exports = async function (context, req) {
  const date = "2022-10-03T20:14:51.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

