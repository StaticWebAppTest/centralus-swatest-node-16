module.exports = async function (context, req) {
  const date = "2023-11-07T16:11:41.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

