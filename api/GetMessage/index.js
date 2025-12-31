module.exports = async function (context, req) {
  const date = "2025-12-31T15:14:36.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

