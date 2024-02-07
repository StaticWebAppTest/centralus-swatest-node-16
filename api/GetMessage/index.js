module.exports = async function (context, req) {
  const date = "2024-02-07T00:39:42.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

