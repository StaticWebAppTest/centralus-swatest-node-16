module.exports = async function (context, req) {
  const date = "2025-02-14T12:22:05.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

