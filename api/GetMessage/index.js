module.exports = async function (context, req) {
  const date = "2026-08-01T21:47:04.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

