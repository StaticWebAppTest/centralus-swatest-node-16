module.exports = async function (context, req) {
  const date = "2026-07-10T16:19:10.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

