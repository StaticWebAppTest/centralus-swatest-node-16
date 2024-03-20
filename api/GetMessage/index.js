module.exports = async function (context, req) {
  const date = "2024-03-20T16:12:31.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

