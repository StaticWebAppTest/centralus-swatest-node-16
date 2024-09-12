module.exports = async function (context, req) {
  const date = "2024-09-12T02:08:03.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

