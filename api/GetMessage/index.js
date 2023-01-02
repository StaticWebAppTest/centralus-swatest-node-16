module.exports = async function (context, req) {
  const date = "2023-01-02T00:51:05.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

