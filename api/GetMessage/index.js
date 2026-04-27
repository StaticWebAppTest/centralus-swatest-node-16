module.exports = async function (context, req) {
  const date = "2026-04-27T15:00:22.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

