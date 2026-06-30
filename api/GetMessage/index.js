module.exports = async function (context, req) {
  const date = "2026-06-30T10:50:11.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

