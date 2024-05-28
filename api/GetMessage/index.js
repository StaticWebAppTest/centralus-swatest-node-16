module.exports = async function (context, req) {
  const date = "2024-05-28T19:08:21.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

