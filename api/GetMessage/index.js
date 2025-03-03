module.exports = async function (context, req) {
  const date = "2025-03-03T02:50:49.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

