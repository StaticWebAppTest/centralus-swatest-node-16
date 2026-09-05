module.exports = async function (context, req) {
  const date = "2026-09-05T20:52:02.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

