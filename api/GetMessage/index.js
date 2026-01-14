module.exports = async function (context, req) {
  const date = "2026-01-14T18:24:25.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

