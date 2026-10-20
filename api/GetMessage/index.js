module.exports = async function (context, req) {
  const date = "2026-10-20T12:33:12.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

