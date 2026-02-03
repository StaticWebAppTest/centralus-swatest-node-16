module.exports = async function (context, req) {
  const date = "2026-02-03T17:46:38.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

