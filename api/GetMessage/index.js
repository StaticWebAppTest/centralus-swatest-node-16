module.exports = async function (context, req) {
  const date = "2025-06-02T16:17:23.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

