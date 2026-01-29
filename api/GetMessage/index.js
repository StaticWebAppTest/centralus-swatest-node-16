module.exports = async function (context, req) {
  const date = "2026-01-29T10:29:17.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

