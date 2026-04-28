module.exports = async function (context, req) {
  const date = "2026-04-28T15:22:00.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

