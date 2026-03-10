module.exports = async function (context, req) {
  const date = "2026-03-10T21:23:32.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

