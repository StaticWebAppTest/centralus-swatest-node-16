module.exports = async function (context, req) {
  const date = "2026-08-15T11:12:49.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

