module.exports = async function (context, req) {
  const date = "2024-08-03T16:12:35.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

