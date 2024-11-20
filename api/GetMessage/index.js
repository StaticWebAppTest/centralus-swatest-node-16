module.exports = async function (context, req) {
  const date = "2024-11-20T03:23:34.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

