module.exports = async function (context, req) {
  const date = "2026-04-30T19:09:19.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

