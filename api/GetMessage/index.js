module.exports = async function (context, req) {
  const date = "2023-08-13T10:07:43.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

