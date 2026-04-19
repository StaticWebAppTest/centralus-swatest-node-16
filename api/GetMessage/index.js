module.exports = async function (context, req) {
  const date = "2026-04-19T17:29:28.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

