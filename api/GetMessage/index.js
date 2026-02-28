module.exports = async function (context, req) {
  const date = "2026-02-28T03:48:33.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

