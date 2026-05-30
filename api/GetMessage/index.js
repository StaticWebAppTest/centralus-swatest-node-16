module.exports = async function (context, req) {
  const date = "2026-05-30T19:20:23.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

