module.exports = async function (context, req) {
  const date = "2026-05-18T14:58:14.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

