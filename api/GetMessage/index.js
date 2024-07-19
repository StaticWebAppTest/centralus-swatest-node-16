module.exports = async function (context, req) {
  const date = "2024-07-19T04:14:15.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

