module.exports = async function (context, req) {
  const date = "2025-12-22T03:26:41.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

