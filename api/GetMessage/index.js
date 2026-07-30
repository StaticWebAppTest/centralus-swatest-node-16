module.exports = async function (context, req) {
  const date = "2026-07-30T17:18:18.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

