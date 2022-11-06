module.exports = async function (context, req) {
  const date = "2022-11-06T10:12:04.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

