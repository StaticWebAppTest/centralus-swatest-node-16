module.exports = async function (context, req) {
  const date = "2026-06-14T19:14:42.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

