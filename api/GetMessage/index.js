module.exports = async function (context, req) {
  const date = "2025-01-26T02:14:27.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

