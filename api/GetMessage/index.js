module.exports = async function (context, req) {
  const date = "2026-02-09T06:02:54.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

