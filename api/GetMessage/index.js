module.exports = async function (context, req) {
  const date = "2026-01-17T13:24:15.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

