module.exports = async function (context, req) {
  const date = "2023-06-26T18:12:28.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

