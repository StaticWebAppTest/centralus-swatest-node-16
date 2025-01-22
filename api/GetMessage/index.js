module.exports = async function (context, req) {
  const date = "2025-01-22T15:12:00.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

