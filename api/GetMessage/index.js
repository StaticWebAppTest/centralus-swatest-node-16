module.exports = async function (context, req) {
  const date = "2026-03-02T15:35:35.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

