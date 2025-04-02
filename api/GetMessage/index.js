module.exports = async function (context, req) {
  const date = "2025-04-02T14:12:37.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

