module.exports = async function (context, req) {
  const date = "2022-09-26T21:12:26.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

