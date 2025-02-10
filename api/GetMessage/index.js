module.exports = async function (context, req) {
  const date = "2025-02-10T20:12:17.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

