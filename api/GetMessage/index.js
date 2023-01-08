module.exports = async function (context, req) {
  const date = "2023-01-08T18:10:39.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

