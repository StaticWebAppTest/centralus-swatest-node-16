module.exports = async function (context, req) {
  const date = "2023-07-15T22:08:27.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

