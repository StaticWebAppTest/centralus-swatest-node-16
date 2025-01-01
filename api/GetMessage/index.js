module.exports = async function (context, req) {
  const date = "2025-01-01T08:15:12.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

