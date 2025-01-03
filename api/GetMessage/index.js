module.exports = async function (context, req) {
  const date = "2025-01-03T02:15:15.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

