module.exports = async function (context, req) {
  const date = "2026-08-02T11:56:10.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

