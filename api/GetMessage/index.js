module.exports = async function (context, req) {
  const date = "2026-02-27T13:54:53.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

