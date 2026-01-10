module.exports = async function (context, req) {
  const date = "2026-01-10T21:12:49.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

