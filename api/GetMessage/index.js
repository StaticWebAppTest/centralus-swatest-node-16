module.exports = async function (context, req) {
  const date = "2023-08-07T02:30:24.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

