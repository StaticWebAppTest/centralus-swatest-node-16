module.exports = async function (context, req) {
  const date = "2025-12-22T10:16:14.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

