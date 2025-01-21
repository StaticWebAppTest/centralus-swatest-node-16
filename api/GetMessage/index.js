module.exports = async function (context, req) {
  const date = "2025-01-21T15:12:02.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

