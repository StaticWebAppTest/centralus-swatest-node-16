module.exports = async function (context, req) {
  const date = "2026-06-20T10:06:31.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

