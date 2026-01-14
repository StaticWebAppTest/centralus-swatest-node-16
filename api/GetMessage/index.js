module.exports = async function (context, req) {
  const date = "2026-01-14T12:31:55.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

