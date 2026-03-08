module.exports = async function (context, req) {
  const date = "2026-03-08T12:33:29.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

