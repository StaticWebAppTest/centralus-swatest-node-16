module.exports = async function (context, req) {
  const date = "2026-03-24T08:42:34.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

