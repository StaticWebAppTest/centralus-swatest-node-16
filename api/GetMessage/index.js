module.exports = async function (context, req) {
  const date = "2025-12-27T03:17:34.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

