module.exports = async function (context, req) {
  const date = "2022-11-18T16:14:41.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

