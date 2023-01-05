module.exports = async function (context, req) {
  const date = "2023-01-05T02:12:50.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

