module.exports = async function (context, req) {
  const date = "2026-01-08T08:21:33.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

