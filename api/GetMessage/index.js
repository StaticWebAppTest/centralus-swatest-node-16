module.exports = async function (context, req) {
  const date = "2025-02-21T05:11:50.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

