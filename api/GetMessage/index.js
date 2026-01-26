module.exports = async function (context, req) {
  const date = "2026-01-26T23:15:43.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

