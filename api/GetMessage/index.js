module.exports = async function (context, req) {
  const date = "2026-02-27T21:22:19.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

