module.exports = async function (context, req) {
  const date = "2022-05-23T03:50:41.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

