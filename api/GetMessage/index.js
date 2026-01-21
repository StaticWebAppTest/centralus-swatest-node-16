module.exports = async function (context, req) {
  const date = "2026-01-21T01:14:37.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

