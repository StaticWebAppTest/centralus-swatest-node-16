module.exports = async function (context, req) {
  const date = "2024-06-22T10:10:31.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

