module.exports = async function (context, req) {
  const date = "2023-01-31T10:10:09.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

