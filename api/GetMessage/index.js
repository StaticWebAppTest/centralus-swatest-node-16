module.exports = async function (context, req) {
  const date = "2026-07-02T09:55:04.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

