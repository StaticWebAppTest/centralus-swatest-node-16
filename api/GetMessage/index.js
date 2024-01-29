module.exports = async function (context, req) {
  const date = "2024-01-29T22:08:29.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

