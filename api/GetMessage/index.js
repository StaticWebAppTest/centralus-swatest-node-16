module.exports = async function (context, req) {
  const date = "2022-06-22T10:14:34.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

