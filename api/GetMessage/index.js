module.exports = async function (context, req) {
  const date = "2026-01-02T09:18:10.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

