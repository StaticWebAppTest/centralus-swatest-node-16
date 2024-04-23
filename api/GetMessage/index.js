module.exports = async function (context, req) {
  const date = "2024-04-23T12:17:58.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

