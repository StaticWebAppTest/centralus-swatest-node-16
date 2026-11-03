module.exports = async function (context, req) {
  const date = "2026-11-03T15:41:08.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

