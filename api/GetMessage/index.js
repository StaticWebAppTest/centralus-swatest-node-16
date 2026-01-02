module.exports = async function (context, req) {
  const date = "2026-01-02T07:19:02.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

