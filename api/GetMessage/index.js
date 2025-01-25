module.exports = async function (context, req) {
  const date = "2025-01-25T15:10:23.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

