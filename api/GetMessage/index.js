module.exports = async function (context, req) {
  const date = "2026-01-02T04:34:35.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

