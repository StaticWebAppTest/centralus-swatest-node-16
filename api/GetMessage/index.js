module.exports = async function (context, req) {
  const date = "2026-06-07T17:59:12.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

