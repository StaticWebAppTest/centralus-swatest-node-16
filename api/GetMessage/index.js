module.exports = async function (context, req) {
  const date = "2026-08-02T08:09:55.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

