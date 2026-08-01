module.exports = async function (context, req) {
  const date = "2026-08-01T11:57:20.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

