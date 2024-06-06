module.exports = async function (context, req) {
  const date = "2024-06-06T19:09:03.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

