module.exports = async function (context, req) {
  const date = "2026-01-27T10:20:37.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

