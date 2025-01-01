module.exports = async function (context, req) {
  const date = "2025-01-01T04:14:49.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

