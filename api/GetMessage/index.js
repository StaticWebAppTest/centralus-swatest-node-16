module.exports = async function (context, req) {
  const date = "2023-07-25T11:07:41.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

