module.exports = async function (context, req) {
  const date = "2026-06-17T14:57:04.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

