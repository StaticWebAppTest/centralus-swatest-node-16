module.exports = async function (context, req) {
  const date = "2022-08-19T23:10:52.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

