module.exports = async function (context, req) {
  const date = "2022-11-15T18:14:11.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

