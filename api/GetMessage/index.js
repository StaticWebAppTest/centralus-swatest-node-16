module.exports = async function (context, req) {
  const date = "2023-05-22T16:10:59.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

