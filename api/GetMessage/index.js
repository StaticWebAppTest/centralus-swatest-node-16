module.exports = async function (context, req) {
  const date = "2026-03-31T22:27:38.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

