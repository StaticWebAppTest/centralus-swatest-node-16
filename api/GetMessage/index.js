module.exports = async function (context, req) {
  const date = "2022-12-13T03:18:29.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

