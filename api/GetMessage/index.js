module.exports = async function (context, req) {
  const date = "2026-02-24T12:50:18.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

