module.exports = async function (context, req) {
  const date = "2026-01-10T04:28:35.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

