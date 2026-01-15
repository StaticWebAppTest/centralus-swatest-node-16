module.exports = async function (context, req) {
  const date = "2026-01-15T11:14:29.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

