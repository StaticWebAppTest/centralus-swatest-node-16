module.exports = async function (context, req) {
  const date = "2026-09-12T11:52:42.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

