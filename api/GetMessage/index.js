module.exports = async function (context, req) {
  const date = "2025-09-06T10:11:21.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

