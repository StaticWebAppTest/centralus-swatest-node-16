module.exports = async function (context, req) {
  const date = "2023-05-26T14:07:41.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

