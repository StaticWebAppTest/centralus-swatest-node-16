module.exports = async function (context, req) {
  const date = "2026-04-06T15:39:17.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

