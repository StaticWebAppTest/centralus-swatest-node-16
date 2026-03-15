module.exports = async function (context, req) {
  const date = "2026-03-15T15:22:17.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

