module.exports = async function (context, req) {
  const date = "2026-06-25T19:48:43.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

