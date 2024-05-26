module.exports = async function (context, req) {
  const date = "2024-05-26T18:11:47.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

