module.exports = async function (context, req) {
  const date = "2023-03-30T21:08:07.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

