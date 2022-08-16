module.exports = async function (context, req) {
  const date = "2022-08-16T08:11:26.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

