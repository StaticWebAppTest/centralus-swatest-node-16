module.exports = async function (context, req) {
  const date = "2025-01-31T12:21:21.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

