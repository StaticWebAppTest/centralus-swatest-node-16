module.exports = async function (context, req) {
  const date = "2026-06-03T22:24:37.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

