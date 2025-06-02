module.exports = async function (context, req) {
  const date = "2025-06-02T20:15:24.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

