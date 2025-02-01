module.exports = async function (context, req) {
  const date = "2025-02-01T16:12:16.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

