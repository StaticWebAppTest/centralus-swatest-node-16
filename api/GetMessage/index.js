module.exports = async function (context, req) {
  const date = "2023-07-02T02:58:14.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

