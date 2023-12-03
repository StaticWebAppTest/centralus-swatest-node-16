module.exports = async function (context, req) {
  const date = "2023-12-03T18:10:26.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

