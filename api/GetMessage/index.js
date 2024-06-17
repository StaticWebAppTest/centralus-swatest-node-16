module.exports = async function (context, req) {
  const date = "2024-06-17T11:08:56.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

