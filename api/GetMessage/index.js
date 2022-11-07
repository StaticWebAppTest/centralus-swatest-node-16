module.exports = async function (context, req) {
  const date = "2022-11-07T05:21:36.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

