module.exports = async function (context, req) {
  const date = "2022-12-22T12:17:36.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

