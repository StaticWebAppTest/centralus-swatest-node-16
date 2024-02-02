module.exports = async function (context, req) {
  const date = "2024-02-02T20:08:48.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

