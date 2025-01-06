module.exports = async function (context, req) {
  const date = "2025-01-06T19:09:05.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

