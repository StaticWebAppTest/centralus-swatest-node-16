module.exports = async function (context, req) {
  const date = "2022-02-27T16:12:26.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

