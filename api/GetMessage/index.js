module.exports = async function (context, req) {
  const date = "2023-01-11T10:12:58.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

