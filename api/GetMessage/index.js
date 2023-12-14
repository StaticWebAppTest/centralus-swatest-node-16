module.exports = async function (context, req) {
  const date = "2023-12-14T05:09:17.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

