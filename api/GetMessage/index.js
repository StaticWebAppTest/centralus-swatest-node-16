module.exports = async function (context, req) {
  const date = "2025-01-09T03:33:46.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

