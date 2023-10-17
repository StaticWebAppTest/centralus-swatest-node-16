module.exports = async function (context, req) {
  const date = "2023-10-17T22:08:15.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

