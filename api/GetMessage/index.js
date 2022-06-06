module.exports = async function (context, req) {
  const date = "2022-06-06T20:10:55.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

