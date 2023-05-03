module.exports = async function (context, req) {
  const date = "2023-05-03T00:47:40.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

