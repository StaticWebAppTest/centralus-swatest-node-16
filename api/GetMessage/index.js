module.exports = async function (context, req) {
  const date = "2026-01-03T17:12:03.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

