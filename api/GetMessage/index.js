module.exports = async function (context, req) {
  const date = "2026-04-22T08:26:26.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

