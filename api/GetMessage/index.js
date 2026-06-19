module.exports = async function (context, req) {
  const date = "2026-06-19T16:28:50.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

