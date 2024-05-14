module.exports = async function (context, req) {
  const date = "2024-05-14T18:12:18.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

