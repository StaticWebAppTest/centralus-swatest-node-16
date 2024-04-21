module.exports = async function (context, req) {
  const date = "2024-04-21T10:08:43.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

