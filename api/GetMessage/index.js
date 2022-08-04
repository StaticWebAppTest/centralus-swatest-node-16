module.exports = async function (context, req) {
  const date = "2022-08-04T16:16:47.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

