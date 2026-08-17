module.exports = async function (context, req) {
  const date = "2026-08-17T13:33:00.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

