module.exports = async function (context, req) {
  const date = "2026-09-25T06:57:06.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

