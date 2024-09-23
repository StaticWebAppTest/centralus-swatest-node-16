module.exports = async function (context, req) {
  const date = "2024-09-23T02:14:58.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

