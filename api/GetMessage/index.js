module.exports = async function (context, req) {
  const date = "2026-01-20T06:26:48.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

