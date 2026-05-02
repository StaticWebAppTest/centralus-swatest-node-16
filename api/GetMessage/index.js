module.exports = async function (context, req) {
  const date = "2026-05-02T23:35:44.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

