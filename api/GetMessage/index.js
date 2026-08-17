module.exports = async function (context, req) {
  const date = "2026-08-17T14:19:57.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

