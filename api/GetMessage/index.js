module.exports = async function (context, req) {
  const date = "2026-01-07T20:17:21.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

