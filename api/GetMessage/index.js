module.exports = async function (context, req) {
  const date = "2026-01-02T10:15:04.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

