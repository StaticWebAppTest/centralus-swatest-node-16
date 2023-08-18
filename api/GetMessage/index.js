module.exports = async function (context, req) {
  const date = "2023-08-18T22:07:25.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

