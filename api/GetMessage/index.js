module.exports = async function (context, req) {
  const date = "2024-08-12T16:13:13.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

