module.exports = async function (context, req) {
  const date = "2024-03-31T18:10:38.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

