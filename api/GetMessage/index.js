module.exports = async function (context, req) {
  const date = "2024-06-03T00:47:11.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

