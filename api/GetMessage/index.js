module.exports = async function (context, req) {
  const date = "2026-02-27T11:26:48.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

