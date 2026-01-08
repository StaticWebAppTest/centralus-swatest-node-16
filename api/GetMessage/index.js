module.exports = async function (context, req) {
  const date = "2026-01-08T10:17:40.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

