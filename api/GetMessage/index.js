module.exports = async function (context, req) {
  const date = "2026-03-23T01:44:48.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

