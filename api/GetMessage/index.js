module.exports = async function (context, req) {
  const date = "2023-12-09T17:07:33.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

