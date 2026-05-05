module.exports = async function (context, req) {
  const date = "2026-05-05T20:55:32.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

