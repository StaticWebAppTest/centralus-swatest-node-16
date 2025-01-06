module.exports = async function (context, req) {
  const date = "2025-01-06T20:11:26.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

