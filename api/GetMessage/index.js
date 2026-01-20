module.exports = async function (context, req) {
  const date = "2026-01-20T11:18:17.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

