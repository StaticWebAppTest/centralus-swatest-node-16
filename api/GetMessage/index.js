module.exports = async function (context, req) {
  const date = "2023-04-05T10:10:58.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

