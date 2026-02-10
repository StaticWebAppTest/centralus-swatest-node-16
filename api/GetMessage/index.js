module.exports = async function (context, req) {
  const date = "2026-02-10T20:42:10.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

