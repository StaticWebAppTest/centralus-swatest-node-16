module.exports = async function (context, req) {
  const date = "2026-05-29T00:05:15.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

