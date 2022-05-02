module.exports = async function (context, req) {
  const date = "2022-05-02T19:10:59.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

