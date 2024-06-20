module.exports = async function (context, req) {
  const date = "2024-06-20T12:18:46.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

