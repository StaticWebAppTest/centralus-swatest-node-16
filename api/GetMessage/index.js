module.exports = async function (context, req) {
  const date = "2026-08-25T04:31:27.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

