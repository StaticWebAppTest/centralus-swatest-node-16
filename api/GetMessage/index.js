module.exports = async function (context, req) {
  const date = "2026-05-22T20:28:36.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

