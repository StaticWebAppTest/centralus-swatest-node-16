module.exports = async function (context, req) {
  const date = "2022-08-29T07:17:37.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

