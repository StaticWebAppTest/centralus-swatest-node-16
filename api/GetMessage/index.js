module.exports = async function (context, req) {
  const date = "2026-02-14T06:35:56.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

