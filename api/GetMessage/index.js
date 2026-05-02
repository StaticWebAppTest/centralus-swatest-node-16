module.exports = async function (context, req) {
  const date = "2026-05-02T10:56:05.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

