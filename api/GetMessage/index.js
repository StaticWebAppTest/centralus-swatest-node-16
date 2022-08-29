module.exports = async function (context, req) {
  const date = "2022-08-29T10:12:26.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

