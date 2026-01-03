module.exports = async function (context, req) {
  const date = "2026-01-03T12:27:12.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

