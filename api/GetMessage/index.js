module.exports = async function (context, req) {
  const date = "2026-11-25T02:52:47.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

