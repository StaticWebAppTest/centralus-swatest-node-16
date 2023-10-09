module.exports = async function (context, req) {
  const date = "2023-10-09T19:06:51.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

