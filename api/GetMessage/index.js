module.exports = async function (context, req) {
  const date = "2024-11-18T13:22:39.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

