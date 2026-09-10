module.exports = async function (context, req) {
  const date = "2026-09-10T07:44:12.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

