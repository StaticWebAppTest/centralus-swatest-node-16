module.exports = async function (context, req) {
  const date = "2023-05-31T07:08:34.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

