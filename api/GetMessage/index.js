module.exports = async function (context, req) {
  const date = "2026-06-03T10:58:00.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

