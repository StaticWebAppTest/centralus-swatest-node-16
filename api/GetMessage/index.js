module.exports = async function (context, req) {
  const date = "2022-11-09T08:16:41.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

