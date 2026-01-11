module.exports = async function (context, req) {
  const date = "2026-01-11T19:10:46.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

