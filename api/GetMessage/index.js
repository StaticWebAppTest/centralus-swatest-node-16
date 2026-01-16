module.exports = async function (context, req) {
  const date = "2026-01-16T03:24:35.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

