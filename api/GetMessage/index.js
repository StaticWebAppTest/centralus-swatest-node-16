module.exports = async function (context, req) {
  const date = "2026-03-25T05:55:56.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

