module.exports = async function (context, req) {
  const date = "2026-08-03T22:00:33.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

