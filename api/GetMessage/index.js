module.exports = async function (context, req) {
  const date = "2026-11-23T10:05:13.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

