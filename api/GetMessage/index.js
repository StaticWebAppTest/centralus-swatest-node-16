module.exports = async function (context, req) {
  const date = "2025-01-06T02:21:41.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

