module.exports = async function (context, req) {
  const date = "2025-05-04T05:12:53.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

