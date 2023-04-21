module.exports = async function (context, req) {
  const date = "2023-04-21T05:08:52.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

