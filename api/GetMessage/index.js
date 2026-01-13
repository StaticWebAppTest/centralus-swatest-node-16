module.exports = async function (context, req) {
  const date = "2026-01-13T18:23:50.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

