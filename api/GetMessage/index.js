module.exports = async function (context, req) {
  const date = "2025-01-22T16:14:35.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

