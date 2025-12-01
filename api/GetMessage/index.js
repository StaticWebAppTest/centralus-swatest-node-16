module.exports = async function (context, req) {
  const date = "2025-12-01T20:14:00.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

