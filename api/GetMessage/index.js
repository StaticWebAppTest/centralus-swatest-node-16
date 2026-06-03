module.exports = async function (context, req) {
  const date = "2026-06-03T15:26:19.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

