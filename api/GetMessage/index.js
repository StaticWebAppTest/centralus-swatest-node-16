module.exports = async function (context, req) {
  const date = "2025-08-04T12:32:00.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

