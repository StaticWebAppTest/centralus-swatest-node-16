module.exports = async function (context, req) {
  const date = "2023-06-12T03:15:28.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

