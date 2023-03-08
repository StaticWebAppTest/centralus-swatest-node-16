module.exports = async function (context, req) {
  const date = "2023-03-08T03:18:29.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

