module.exports = async function (context, req) {
  const date = "2024-05-31T08:13:11.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

