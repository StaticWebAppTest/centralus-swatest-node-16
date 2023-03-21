module.exports = async function (context, req) {
  const date = "2023-03-21T15:08:16.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

