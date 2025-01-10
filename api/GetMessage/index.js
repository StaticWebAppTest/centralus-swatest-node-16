module.exports = async function (context, req) {
  const date = "2025-01-10T06:17:02.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

