module.exports = async function (context, req) {
  const date = "2024-04-19T07:10:14.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

