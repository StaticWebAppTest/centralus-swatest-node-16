module.exports = async function (context, req) {
  const date = "2026-03-15T17:21:04.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

