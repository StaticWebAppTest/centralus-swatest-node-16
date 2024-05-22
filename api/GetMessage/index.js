module.exports = async function (context, req) {
  const date = "2024-05-22T00:44:54.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

