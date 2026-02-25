module.exports = async function (context, req) {
  const date = "2026-02-25T07:49:53.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

