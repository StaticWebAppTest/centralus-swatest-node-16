module.exports = async function (context, req) {
  const date = "2023-01-05T21:08:37.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

