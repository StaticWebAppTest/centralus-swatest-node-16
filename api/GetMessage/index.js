module.exports = async function (context, req) {
  const date = "2023-01-05T10:10:36.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

