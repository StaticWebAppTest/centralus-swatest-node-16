module.exports = async function (context, req) {
  const date = "2026-08-23T03:43:08.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

