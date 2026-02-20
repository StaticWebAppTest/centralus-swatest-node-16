module.exports = async function (context, req) {
  const date = "2026-02-20T01:24:56.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

