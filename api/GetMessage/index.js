module.exports = async function (context, req) {
  const date = "2022-03-06T08:11:41.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

