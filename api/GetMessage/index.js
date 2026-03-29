module.exports = async function (context, req) {
  const date = "2026-03-29T06:08:10.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

