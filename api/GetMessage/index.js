module.exports = async function (context, req) {
  const date = "2026-03-31T17:50:43.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

