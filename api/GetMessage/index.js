module.exports = async function (context, req) {
  const date = "2024-01-31T22:08:54.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

