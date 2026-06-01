module.exports = async function (context, req) {
  const date = "2026-06-01T11:17:38.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

