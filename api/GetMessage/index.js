module.exports = async function (context, req) {
  const date = "2022-06-29T05:20:59.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

