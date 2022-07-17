module.exports = async function (context, req) {
  const date = "2022-07-17T22:10:12.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

