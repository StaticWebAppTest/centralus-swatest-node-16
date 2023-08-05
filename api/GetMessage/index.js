module.exports = async function (context, req) {
  const date = "2023-08-05T18:09:23.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

