module.exports = async function (context, req) {
  const date = "2026-05-21T23:55:04.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

