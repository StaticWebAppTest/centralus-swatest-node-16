module.exports = async function (context, req) {
  const date = "2023-09-25T05:08:48.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

