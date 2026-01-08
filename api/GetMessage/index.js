module.exports = async function (context, req) {
  const date = "2026-01-08T06:25:01.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

