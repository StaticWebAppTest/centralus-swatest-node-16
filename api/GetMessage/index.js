module.exports = async function (context, req) {
  const date = "2022-03-26T23:09:44.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

