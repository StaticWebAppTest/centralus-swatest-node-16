module.exports = async function (context, req) {
  const date = "2023-06-14T05:08:28.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

