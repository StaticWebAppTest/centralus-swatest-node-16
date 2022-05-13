module.exports = async function (context, req) {
  const date = "2022-05-13T19:09:29.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

