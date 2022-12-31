module.exports = async function (context, req) {
  const date = "2022-12-31T02:05:40.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

