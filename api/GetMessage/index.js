module.exports = async function (context, req) {
  const date = "2026-06-16T17:57:55.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

