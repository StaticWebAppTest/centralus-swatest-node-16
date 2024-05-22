module.exports = async function (context, req) {
  const date = "2024-05-22T10:10:28.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

