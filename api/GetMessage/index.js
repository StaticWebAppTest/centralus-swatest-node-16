module.exports = async function (context, req) {
  const date = "2022-06-16T00:56:38.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

