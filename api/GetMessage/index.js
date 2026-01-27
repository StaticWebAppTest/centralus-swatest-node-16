module.exports = async function (context, req) {
  const date = "2026-01-27T20:16:11.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

