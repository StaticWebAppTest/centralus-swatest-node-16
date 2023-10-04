module.exports = async function (context, req) {
  const date = "2023-10-04T09:09:13.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

