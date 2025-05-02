module.exports = async function (context, req) {
  const date = "2025-05-02T21:11:59.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

