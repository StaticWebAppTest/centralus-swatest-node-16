module.exports = async function (context, req) {
  const date = "2025-01-01T10:12:11.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

