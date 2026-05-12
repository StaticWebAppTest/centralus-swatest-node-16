module.exports = async function (context, req) {
  const date = "2026-05-12T10:25:17.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

