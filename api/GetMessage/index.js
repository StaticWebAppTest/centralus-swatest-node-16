module.exports = async function (context, req) {
  const date = "2026-04-18T14:38:09.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

