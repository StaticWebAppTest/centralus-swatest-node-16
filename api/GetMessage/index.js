module.exports = async function (context, req) {
  const date = "2025-01-22T03:14:56.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

