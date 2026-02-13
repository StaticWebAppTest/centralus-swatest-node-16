module.exports = async function (context, req) {
  const date = "2026-02-13T12:41:42.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

