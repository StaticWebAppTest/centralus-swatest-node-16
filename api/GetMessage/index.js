module.exports = async function (context, req) {
  const date = "2026-09-05T09:46:28.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

