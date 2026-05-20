module.exports = async function (context, req) {
  const date = "2026-05-20T10:43:38.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

