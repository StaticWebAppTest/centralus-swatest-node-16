module.exports = async function (context, req) {
  const date = "2026-10-27T20:20:44.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

