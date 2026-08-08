module.exports = async function (context, req) {
  const date = "2026-08-08T19:22:48.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

