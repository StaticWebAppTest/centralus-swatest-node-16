module.exports = async function (context, req) {
  const date = "2026-05-16T14:49:51.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

