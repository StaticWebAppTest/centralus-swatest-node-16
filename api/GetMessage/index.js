module.exports = async function (context, req) {
  const date = "2024-08-28T03:12:26.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

