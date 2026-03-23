module.exports = async function (context, req) {
  const date = "2026-03-23T06:05:59.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

