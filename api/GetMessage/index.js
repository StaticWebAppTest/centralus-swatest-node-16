module.exports = async function (context, req) {
  const date = "2026-02-24T14:06:35.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

