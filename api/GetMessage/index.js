module.exports = async function (context, req) {
  const date = "2024-06-28T20:10:19.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

