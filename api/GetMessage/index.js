module.exports = async function (context, req) {
  const date = "2023-09-08T18:10:48.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

