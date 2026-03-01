module.exports = async function (context, req) {
  const date = "2026-03-01T19:18:10.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

