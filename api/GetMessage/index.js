module.exports = async function (context, req) {
  const date = "2022-06-07T13:29:37.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

