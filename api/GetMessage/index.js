module.exports = async function (context, req) {
  const date = "2023-07-27T17:07:41.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

