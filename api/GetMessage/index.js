module.exports = async function (context, req) {
  const date = "2022-08-11T07:10:26.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

