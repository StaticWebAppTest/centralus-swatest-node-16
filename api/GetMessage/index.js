module.exports = async function (context, req) {
  const date = "2023-06-17T04:10:14.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

