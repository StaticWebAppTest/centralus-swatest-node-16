module.exports = async function (context, req) {
  const date = "2025-01-08T17:10:14.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

