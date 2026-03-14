module.exports = async function (context, req) {
  const date = "2026-03-14T17:21:05.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

