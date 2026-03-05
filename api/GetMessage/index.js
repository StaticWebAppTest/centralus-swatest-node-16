module.exports = async function (context, req) {
  const date = "2026-03-05T15:43:12.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

