module.exports = async function (context, req) {
  const date = "2026-05-02T16:38:22.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

