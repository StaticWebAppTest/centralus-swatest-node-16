module.exports = async function (context, req) {
  const date = "2026-01-17T10:14:27.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

