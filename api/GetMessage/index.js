module.exports = async function (context, req) {
  const date = "2026-04-25T15:33:57.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

