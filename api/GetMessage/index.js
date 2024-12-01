module.exports = async function (context, req) {
  const date = "2024-12-01T15:11:17.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

