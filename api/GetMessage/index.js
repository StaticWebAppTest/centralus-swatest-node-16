module.exports = async function (context, req) {
  const date = "2026-03-01T14:18:00.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

