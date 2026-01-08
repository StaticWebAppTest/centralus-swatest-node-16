module.exports = async function (context, req) {
  const date = "2026-01-08T11:15:36.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

