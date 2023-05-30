module.exports = async function (context, req) {
  const date = "2023-05-30T10:09:22.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

