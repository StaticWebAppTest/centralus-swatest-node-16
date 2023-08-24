module.exports = async function (context, req) {
  const date = "2023-08-24T16:10:41.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

