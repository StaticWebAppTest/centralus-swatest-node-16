module.exports = async function (context, req) {
  const date = "2026-01-03T23:13:33.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

