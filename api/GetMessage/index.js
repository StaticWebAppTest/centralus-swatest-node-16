module.exports = async function (context, req) {
  const date = "2024-09-26T11:09:55.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

