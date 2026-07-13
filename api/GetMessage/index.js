module.exports = async function (context, req) {
  const date = "2026-07-13T16:23:26.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

