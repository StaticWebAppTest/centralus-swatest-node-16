module.exports = async function (context, req) {
  const date = "2025-01-01T20:12:24.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

