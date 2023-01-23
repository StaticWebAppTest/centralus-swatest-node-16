module.exports = async function (context, req) {
  const date = "2023-01-23T16:13:05.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

