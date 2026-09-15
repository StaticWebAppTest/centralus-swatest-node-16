module.exports = async function (context, req) {
  const date = "2026-09-15T10:48:00.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

