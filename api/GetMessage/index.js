module.exports = async function (context, req) {
  const date = "2026-03-03T23:19:46.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

