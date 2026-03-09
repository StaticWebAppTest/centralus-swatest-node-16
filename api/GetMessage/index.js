module.exports = async function (context, req) {
  const date = "2026-03-09T14:00:46.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

