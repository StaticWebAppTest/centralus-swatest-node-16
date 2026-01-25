module.exports = async function (context, req) {
  const date = "2026-01-25T17:12:17.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

