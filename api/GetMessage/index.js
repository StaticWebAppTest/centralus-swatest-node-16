module.exports = async function (context, req) {
  const date = "2023-01-12T05:09:05.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

