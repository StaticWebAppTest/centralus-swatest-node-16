module.exports = async function (context, req) {
  const date = "2026-02-11T07:50:36.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

