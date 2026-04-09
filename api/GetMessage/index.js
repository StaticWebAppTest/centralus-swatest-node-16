module.exports = async function (context, req) {
  const date = "2026-04-09T20:56:14.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

