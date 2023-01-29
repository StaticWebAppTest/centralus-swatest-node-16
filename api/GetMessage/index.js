module.exports = async function (context, req) {
  const date = "2023-01-29T15:08:39.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

