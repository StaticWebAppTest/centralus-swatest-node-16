module.exports = async function (context, req) {
  const date = "2026-05-14T19:37:47.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

