module.exports = async function (context, req) {
  const date = "2022-04-03T18:11:30.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

