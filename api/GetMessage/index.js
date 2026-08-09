module.exports = async function (context, req) {
  const date = "2026-08-09T13:42:24.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

