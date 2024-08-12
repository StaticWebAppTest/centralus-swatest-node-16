module.exports = async function (context, req) {
  const date = "2024-08-12T03:12:20.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

