module.exports = async function (context, req) {
  const date = "2022-05-09T20:11:52.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

