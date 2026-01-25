module.exports = async function (context, req) {
  const date = "2026-01-25T15:13:50.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

