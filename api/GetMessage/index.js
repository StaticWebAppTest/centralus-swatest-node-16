module.exports = async function (context, req) {
  const date = "2026-01-15T10:17:01.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

