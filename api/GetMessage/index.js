module.exports = async function (context, req) {
  const date = "2024-04-05T21:08:28.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

