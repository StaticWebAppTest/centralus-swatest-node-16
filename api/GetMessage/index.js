module.exports = async function (context, req) {
  const date = "2026-08-21T20:17:02.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

