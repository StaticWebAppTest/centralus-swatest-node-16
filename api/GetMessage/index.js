module.exports = async function (context, req) {
  const date = "2022-08-13T14:09:41.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

