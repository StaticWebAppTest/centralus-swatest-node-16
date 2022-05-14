module.exports = async function (context, req) {
  const date = "2022-05-14T07:16:14.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

