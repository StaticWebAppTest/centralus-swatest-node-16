module.exports = async function (context, req) {
  const date = "2026-01-08T13:35:51.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

