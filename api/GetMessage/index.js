module.exports = async function (context, req) {
  const date = "2026-01-12T20:17:47.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

