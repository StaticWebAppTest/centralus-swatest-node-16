module.exports = async function (context, req) {
  const date = "2025-11-19T17:13:12.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

