module.exports = async function (context, req) {
  const date = "2023-01-26T14:08:41.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

