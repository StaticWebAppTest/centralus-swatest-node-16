module.exports = async function (context, req) {
  const date = "2023-04-12T10:09:29.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

