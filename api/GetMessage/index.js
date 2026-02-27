module.exports = async function (context, req) {
  const date = "2026-02-27T15:32:04.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

