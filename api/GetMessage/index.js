module.exports = async function (context, req) {
  const date = "2026-01-07T10:17:34.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

