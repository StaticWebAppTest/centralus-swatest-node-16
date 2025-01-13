module.exports = async function (context, req) {
  const date = "2025-01-13T02:50:32.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

