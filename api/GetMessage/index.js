module.exports = async function (context, req) {
  const date = "2022-05-19T05:16:29.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

