module.exports = async function (context, req) {
  const date = "2026-05-10T21:40:28.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

