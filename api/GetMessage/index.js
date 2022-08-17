module.exports = async function (context, req) {
  const date = "2022-08-17T16:16:15.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

