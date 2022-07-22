module.exports = async function (context, req) {
  const date = "2022-07-22T21:09:48.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

