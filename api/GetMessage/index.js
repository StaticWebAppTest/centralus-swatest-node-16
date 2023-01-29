module.exports = async function (context, req) {
  const date = "2023-01-29T02:17:58.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

