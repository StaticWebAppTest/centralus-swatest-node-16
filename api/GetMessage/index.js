module.exports = async function (context, req) {
  const date = "2026-04-22T20:45:06.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

