module.exports = async function (context, req) {
  const date = "2022-07-03T16:13:18.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

