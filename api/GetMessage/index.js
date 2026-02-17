module.exports = async function (context, req) {
  const date = "2026-02-17T10:37:46.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

