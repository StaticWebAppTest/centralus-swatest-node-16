module.exports = async function (context, req) {
  const date = "2026-04-01T17:43:26.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

