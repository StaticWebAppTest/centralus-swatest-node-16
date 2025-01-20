module.exports = async function (context, req) {
  const date = "2025-01-20T15:12:24.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

