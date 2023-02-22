module.exports = async function (context, req) {
  const date = "2023-02-22T23:08:58.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

