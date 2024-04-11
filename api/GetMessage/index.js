module.exports = async function (context, req) {
  const date = "2024-04-11T22:08:31.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

