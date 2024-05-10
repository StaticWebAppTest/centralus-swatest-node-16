module.exports = async function (context, req) {
  const date = "2024-05-10T08:12:39.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

