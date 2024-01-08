module.exports = async function (context, req) {
  const date = "2024-01-08T11:08:03.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

