module.exports = async function (context, req) {
  const date = "2026-07-13T06:07:28.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

