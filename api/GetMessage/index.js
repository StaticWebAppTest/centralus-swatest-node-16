module.exports = async function (context, req) {
  const date = "2022-11-03T10:12:21.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

