module.exports = async function (context, req) {
  const date = "2026-08-11T15:53:29.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

