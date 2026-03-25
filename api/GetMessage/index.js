module.exports = async function (context, req) {
  const date = "2026-03-25T12:53:41.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

