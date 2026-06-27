module.exports = async function (context, req) {
  const date = "2026-06-27T15:10:20.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

