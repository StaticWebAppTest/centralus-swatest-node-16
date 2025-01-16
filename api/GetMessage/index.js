module.exports = async function (context, req) {
  const date = "2025-01-16T13:17:38.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

