module.exports = async function (context, req) {
  const date = "2023-03-05T10:09:48.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

