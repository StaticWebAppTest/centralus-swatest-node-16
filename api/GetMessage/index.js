module.exports = async function (context, req) {
  const date = "2026-01-09T13:33:18.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

