module.exports = async function (context, req) {
  const date = "2024-06-26T02:28:58.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

