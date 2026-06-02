module.exports = async function (context, req) {
  const date = "2026-06-02T11:58:16.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

