module.exports = async function (context, req) {
  const date = "2026-03-27T19:37:05.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

