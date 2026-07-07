module.exports = async function (context, req) {
  const date = "2026-07-07T14:13:24.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

