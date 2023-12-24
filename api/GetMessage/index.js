module.exports = async function (context, req) {
  const date = "2023-12-24T08:11:05.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

