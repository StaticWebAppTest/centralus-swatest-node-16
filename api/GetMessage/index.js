module.exports = async function (context, req) {
  const date = "2024-11-26T23:11:40.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

