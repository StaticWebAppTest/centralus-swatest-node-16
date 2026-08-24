module.exports = async function (context, req) {
  const date = "2026-08-24T12:34:04.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

