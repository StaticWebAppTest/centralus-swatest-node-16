module.exports = async function (context, req) {
  const date = "2025-04-06T13:18:43.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

