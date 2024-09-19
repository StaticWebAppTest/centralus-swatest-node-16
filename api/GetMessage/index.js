module.exports = async function (context, req) {
  const date = "2024-09-19T13:19:14.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

