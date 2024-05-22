module.exports = async function (context, req) {
  const date = "2024-05-22T18:12:58.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

