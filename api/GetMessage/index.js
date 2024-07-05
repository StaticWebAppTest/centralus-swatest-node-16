module.exports = async function (context, req) {
  const date = "2024-07-05T21:09:59.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

