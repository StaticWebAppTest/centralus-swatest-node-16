module.exports = async function (context, req) {
  const date = "2023-02-07T15:10:05.282Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

