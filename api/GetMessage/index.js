module.exports = async function (context, req) {
  const date = "2024-07-29T16:13:44.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

