module.exports = async function (context, req) {
  const date = "2024-04-05T07:09:04.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

