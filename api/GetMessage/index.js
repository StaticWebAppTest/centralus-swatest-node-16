module.exports = async function (context, req) {
  const date = "2022-12-24T16:11:45.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

