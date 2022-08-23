module.exports = async function (context, req) {
  const date = "2022-08-23T22:11:05.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

