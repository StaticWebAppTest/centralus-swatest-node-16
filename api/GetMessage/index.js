module.exports = async function (context, req) {
  const date = "2024-01-12T00:44:54.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

