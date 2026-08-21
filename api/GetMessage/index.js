module.exports = async function (context, req) {
  const date = "2026-08-21T04:30:12.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

