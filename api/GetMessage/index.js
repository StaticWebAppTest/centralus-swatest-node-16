module.exports = async function (context, req) {
  const date = "2024-06-13T18:12:58.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

