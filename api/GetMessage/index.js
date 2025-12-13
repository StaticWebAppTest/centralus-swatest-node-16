module.exports = async function (context, req) {
  const date = "2025-12-13T13:22:01.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

