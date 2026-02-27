module.exports = async function (context, req) {
  const date = "2026-02-27T12:41:49.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

