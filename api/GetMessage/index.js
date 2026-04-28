module.exports = async function (context, req) {
  const date = "2026-04-28T21:01:16.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

