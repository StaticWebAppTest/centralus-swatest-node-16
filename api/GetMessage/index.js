module.exports = async function (context, req) {
  const date = "2026-08-01T02:08:22.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

