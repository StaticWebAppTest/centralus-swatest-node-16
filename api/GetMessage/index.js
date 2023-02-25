module.exports = async function (context, req) {
  const date = "2023-02-25T04:11:41.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

