module.exports = async function (context, req) {
  const date = "2025-10-15T01:02:49.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

