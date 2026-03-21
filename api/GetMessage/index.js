module.exports = async function (context, req) {
  const date = "2026-03-21T03:59:05.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

