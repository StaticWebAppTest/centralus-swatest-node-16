module.exports = async function (context, req) {
  const date = "2024-03-22T18:11:38.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

