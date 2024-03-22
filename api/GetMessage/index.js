module.exports = async function (context, req) {
  const date = "2024-03-22T10:10:12.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

