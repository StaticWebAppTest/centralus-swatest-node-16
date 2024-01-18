module.exports = async function (context, req) {
  const date = "2024-01-18T18:11:55.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

