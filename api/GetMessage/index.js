module.exports = async function (context, req) {
  const date = "2025-01-26T12:19:26.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

