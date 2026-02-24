module.exports = async function (context, req) {
  const date = "2026-02-24T17:55:33.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

