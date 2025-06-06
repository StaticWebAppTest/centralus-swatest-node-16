module.exports = async function (context, req) {
  const date = "2025-06-06T11:12:05.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

