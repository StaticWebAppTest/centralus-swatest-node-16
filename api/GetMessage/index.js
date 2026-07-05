module.exports = async function (context, req) {
  const date = "2026-07-05T09:36:45.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

