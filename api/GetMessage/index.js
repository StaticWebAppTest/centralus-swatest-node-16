module.exports = async function (context, req) {
  const date = "2026-01-25T07:16:35.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

