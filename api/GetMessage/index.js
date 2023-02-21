module.exports = async function (context, req) {
  const date = "2023-02-21T11:08:41.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

