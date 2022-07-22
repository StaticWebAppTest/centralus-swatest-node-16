module.exports = async function (context, req) {
  const date = "2022-07-22T16:17:48.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

