module.exports = async function (context, req) {
  const date = "2026-08-01T18:58:16.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

