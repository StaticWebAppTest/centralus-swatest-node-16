module.exports = async function (context, req) {
  const date = "2024-05-07T01:51:10.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

