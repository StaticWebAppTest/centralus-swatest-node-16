module.exports = async function (context, req) {
  const date = "2025-01-14T02:08:18.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

