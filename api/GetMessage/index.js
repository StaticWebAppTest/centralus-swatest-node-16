module.exports = async function (context, req) {
  const date = "2022-04-05T16:14:35.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

