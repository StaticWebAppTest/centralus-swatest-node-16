module.exports = async function (context, req) {
  const date = "2026-02-22T18:26:00.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

