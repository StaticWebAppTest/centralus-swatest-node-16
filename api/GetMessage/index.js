module.exports = async function (context, req) {
  const date = "2026-01-24T17:12:21.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

