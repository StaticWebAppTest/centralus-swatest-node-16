module.exports = async function (context, req) {
  const date = "2026-01-15T01:10:48.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

