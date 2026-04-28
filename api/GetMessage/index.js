module.exports = async function (context, req) {
  const date = "2026-04-28T02:13:38.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

