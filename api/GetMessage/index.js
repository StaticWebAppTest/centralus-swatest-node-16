module.exports = async function (context, req) {
  const date = "2026-06-14T05:25:25.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

