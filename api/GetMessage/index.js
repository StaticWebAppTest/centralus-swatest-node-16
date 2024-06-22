module.exports = async function (context, req) {
  const date = "2024-06-22T08:12:37.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

