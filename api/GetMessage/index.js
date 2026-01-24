module.exports = async function (context, req) {
  const date = "2026-01-24T14:13:38.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

