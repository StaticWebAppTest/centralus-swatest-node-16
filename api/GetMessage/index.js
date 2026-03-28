module.exports = async function (context, req) {
  const date = "2026-03-28T16:25:30.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

