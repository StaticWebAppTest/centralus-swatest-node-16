module.exports = async function (context, req) {
  const date = "2023-08-05T07:07:30.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

