module.exports = async function (context, req) {
  const date = "2026-02-12T08:38:05.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

