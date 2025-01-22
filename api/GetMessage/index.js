module.exports = async function (context, req) {
  const date = "2025-01-22T10:10:30.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

