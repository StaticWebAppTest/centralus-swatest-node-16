module.exports = async function (context, req) {
  const date = "2026-01-27T17:22:25.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

