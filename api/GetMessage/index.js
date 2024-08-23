module.exports = async function (context, req) {
  const date = "2024-08-23T02:02:21.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

