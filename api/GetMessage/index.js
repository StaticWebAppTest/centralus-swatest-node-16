module.exports = async function (context, req) {
  const date = "2024-09-19T07:11:12.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

