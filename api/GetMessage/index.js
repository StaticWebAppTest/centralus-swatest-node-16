module.exports = async function (context, req) {
  const date = "2026-01-13T10:17:15.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

