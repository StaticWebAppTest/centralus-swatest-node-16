module.exports = async function (context, req) {
  const date = "2026-03-27T22:24:43.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

