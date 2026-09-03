module.exports = async function (context, req) {
  const date = "2026-09-03T19:32:51.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

