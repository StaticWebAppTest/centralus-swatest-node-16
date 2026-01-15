module.exports = async function (context, req) {
  const date = "2026-01-15T18:27:48.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

