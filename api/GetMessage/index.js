module.exports = async function (context, req) {
  const date = "2026-01-28T05:22:48.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

