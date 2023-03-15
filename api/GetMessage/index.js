module.exports = async function (context, req) {
  const date = "2023-03-15T18:12:33.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

