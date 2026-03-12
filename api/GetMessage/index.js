module.exports = async function (context, req) {
  const date = "2026-03-12T12:41:56.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

