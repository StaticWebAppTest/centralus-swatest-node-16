module.exports = async function (context, req) {
  const date = "2025-08-02T16:16:17.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

