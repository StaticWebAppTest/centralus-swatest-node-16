module.exports = async function (context, req) {
  const date = "2026-05-01T17:52:33.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

