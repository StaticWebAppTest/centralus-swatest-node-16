module.exports = async function (context, req) {
  const date = "2026-01-17T14:13:04.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

