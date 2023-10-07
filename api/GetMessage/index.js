module.exports = async function (context, req) {
  const date = "2023-10-07T22:07:41.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

