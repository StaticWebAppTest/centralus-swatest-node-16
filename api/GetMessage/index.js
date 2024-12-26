module.exports = async function (context, req) {
  const date = "2024-12-26T09:12:05.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

