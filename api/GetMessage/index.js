module.exports = async function (context, req) {
  const date = "2026-03-31T16:01:00.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

