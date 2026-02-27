module.exports = async function (context, req) {
  const date = "2026-02-27T10:29:59.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

