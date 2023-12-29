module.exports = async function (context, req) {
  const date = "2023-12-29T21:07:42.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

