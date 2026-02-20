module.exports = async function (context, req) {
  const date = "2026-02-20T06:45:53.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

