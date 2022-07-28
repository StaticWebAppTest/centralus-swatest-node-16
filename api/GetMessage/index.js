module.exports = async function (context, req) {
  const date = "2022-07-28T21:09:32.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

