module.exports = async function (context, req) {
  const date = "2022-12-29T22:08:45.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

