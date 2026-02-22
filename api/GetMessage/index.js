module.exports = async function (context, req) {
  const date = "2026-02-22T06:38:26.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

