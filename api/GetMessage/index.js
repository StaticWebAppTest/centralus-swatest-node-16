module.exports = async function (context, req) {
  const date = "2025-01-05T10:11:15.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

