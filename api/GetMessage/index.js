module.exports = async function (context, req) {
  const date = "2025-01-20T03:14:33.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

