module.exports = async function (context, req) {
  const date = "2024-11-23T21:10:45.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

