module.exports = async function (context, req) {
  const date = "2026-03-14T19:21:47.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

