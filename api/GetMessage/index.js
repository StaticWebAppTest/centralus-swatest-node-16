module.exports = async function (context, req) {
  const date = "2023-12-09T14:07:32.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

