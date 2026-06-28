module.exports = async function (context, req) {
  const date = "2026-06-28T02:48:13.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

