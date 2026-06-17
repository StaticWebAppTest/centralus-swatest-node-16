module.exports = async function (context, req) {
  const date = "2026-06-17T17:47:34.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

