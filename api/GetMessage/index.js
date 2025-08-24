module.exports = async function (context, req) {
  const date = "2025-08-24T10:12:32.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

