module.exports = async function (context, req) {
  const date = "2024-12-10T13:23:55.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

