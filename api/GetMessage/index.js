module.exports = async function (context, req) {
  const date = "2022-09-22T13:41:31.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

