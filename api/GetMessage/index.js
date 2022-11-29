module.exports = async function (context, req) {
  const date = "2022-11-29T13:22:17.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

