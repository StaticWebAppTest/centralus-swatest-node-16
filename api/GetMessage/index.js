module.exports = async function (context, req) {
  const date = "2026-01-22T10:20:30.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

