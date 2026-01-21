module.exports = async function (context, req) {
  const date = "2026-01-21T10:20:20.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

