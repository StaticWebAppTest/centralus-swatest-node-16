module.exports = async function (context, req) {
  const date = "2026-02-21T23:17:33.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

