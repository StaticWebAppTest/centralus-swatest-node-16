module.exports = async function (context, req) {
  const date = "2026-01-05T12:33:06.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

