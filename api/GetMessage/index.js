module.exports = async function (context, req) {
  const date = "2025-01-10T20:13:17.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

