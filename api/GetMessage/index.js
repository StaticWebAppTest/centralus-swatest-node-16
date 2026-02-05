module.exports = async function (context, req) {
  const date = "2026-02-05T20:25:35.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

