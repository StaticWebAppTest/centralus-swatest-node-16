module.exports = async function (context, req) {
  const date = "2024-03-16T14:07:12.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

