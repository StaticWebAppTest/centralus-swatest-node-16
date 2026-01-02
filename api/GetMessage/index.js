module.exports = async function (context, req) {
  const date = "2026-01-02T18:21:06.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

