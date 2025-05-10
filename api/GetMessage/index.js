module.exports = async function (context, req) {
  const date = "2025-05-10T10:12:32.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

