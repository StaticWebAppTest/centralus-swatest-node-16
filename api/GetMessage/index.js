module.exports = async function (context, req) {
  const date = "2026-01-02T22:14:15.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

