module.exports = async function (context, req) {
  const date = "2025-01-05T02:49:46.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

