module.exports = async function (context, req) {
  const date = "2023-12-09T13:09:18.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

