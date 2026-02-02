module.exports = async function (context, req) {
  const date = "2026-02-02T15:31:39.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

