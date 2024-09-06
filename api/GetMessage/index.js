module.exports = async function (context, req) {
  const date = "2024-09-06T04:13:24.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

