module.exports = async function (context, req) {
  const date = "2026-06-09T10:54:07.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

