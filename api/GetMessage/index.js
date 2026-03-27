module.exports = async function (context, req) {
  const date = "2026-03-27T04:28:55.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

